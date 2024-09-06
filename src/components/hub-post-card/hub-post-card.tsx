import { Component, Host, Prop, h } from '@stencil/core';
import { authenticityAnalysis, getAnalysisConfiguration, getAnalysisValue, sentimentAnalysis, toxicityAnalysis } from '../../util/analysis';

@Component({
  tag: 'hub-post-card',
  styleUrl: 'hub-post-card.css',
  shadow: true,
})
export class HubPostCard {

  @Prop() post: any;

  renderDimension(dimension: string, value: number) {
    const analysisConfiguration = getAnalysisConfiguration(dimension);
    const analysis = getAnalysisValue(value, analysisConfiguration);
    const chip = <calcite-chip class={`${dimension}-${analysis.name.toLowerCase().replace(' ', '-')}`} value="calcite chip" icon={analysis.icon}>{analysis.name}</calcite-chip>;
    const graph = this.renderRange(value, [-1, 1]);
    return (
      <div class="dimension">
        {chip}
        {graph}
      </div>
    );
  }

  render() {
    console.debug('Rendering Post:', this.post);
    return (
      <Host>
        <slot></slot>
        <calcite-card>
            <span class="title" slot="heading">{this.post.properties.title}</span>
            <span class="body" slot="description">{this.post.properties.body}
            {this.renderRationaleModal()}

            </span>
            <div slot="footer-start">
              {this.renderDimension('toxicity', this.post.properties.toxicity)}
              {this.renderDimension('sentiment', this.post.properties.sentiment)}
              {this.renderDimension('authenticity', this.post.properties.authenticity)}<br/>
              </div>
            
            <div slot="footer-end">
              <calcite-select width="m">
                <calcite-option value="approved" selected={this.post.properties.status === 'approved'}>Approved</calcite-option>
                <calcite-option value="pending"selected={this.post.properties.status === 'pending'}>Pending</calcite-option>
                <calcite-option value="hidden"selected={this.post.properties.status === 'hidden'}>Hidden</calcite-option>
              </calcite-select>
            </div>
        </calcite-card>
      </Host>
    );  
  }


  dialogRef: any;

  private openDialog() {
    this.dialogRef.open = true;
  }
  private renderRationaleModal() {
    return (
      <div>
        <calcite-link onclick={() => this.openDialog()}>more details</calcite-link>
        <calcite-dialog width-scale="m" heading="Evaluation rationale" id="example-dialog" modal placement="center" ref={el => this.dialogRef = el}>
            <div slot="content-bottom">This information was created by generative AI.</div>
            {this.post.properties.body}
            {this.renderRationales()}
        </calcite-dialog>
      </div>
    )
  }
  private renderRange(value: number, range: [number, number]) {
    const percentage = (value - range[0]) / (range[1] - range[0]) * 100;
    const barStyle = {
      width: `${percentage}%`
    };

    return (
      <div class="graph">
        <div class="bar" style={barStyle}></div>
      </div>
    );
  }
  private renderRationales() {
    return <calcite-accordion>
      <calcite-accordion-item  expanded heading="Toxicity Rationale" icon-start="">
      {this.renderRange(this.post.properties.toxicity, [-1, 1])}
      {this.post.properties.toxicityRationale}<br />
      </calcite-accordion-item>
      <calcite-accordion-item expanded heading="Sentiment Rationale" icon-start="">
      {this.renderRange(this.post.properties.sentiment, [-1, 1])}
        {this.post.properties.sentimentRationale}<br />
      </calcite-accordion-item>
      <calcite-accordion-item expanded heading="Authenticity Rationale" icon-start="">
      {this.renderRange(this.post.properties.authenticity, [-1, 1])}
        {this.post.properties.authenticityRationale}<br />
      </calcite-accordion-item>
    </calcite-accordion>;
  }
}
