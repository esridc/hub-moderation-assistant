import { Component, Host, Prop, h } from '@stencil/core';
import { authenticityAnalysis, getAnalysisValue, sentimentAnalysis, toxicityAnalysis } from '../../util/analysis';

@Component({
  tag: 'hub-post-card',
  styleUrl: 'hub-post-card.css',
  shadow: true,
})
export class HubPostCard {

  @Prop() post: any;

  renderAuthenticity(authenticity: number) {
    const analysis = getAnalysisValue(authenticity, authenticityAnalysis);
    return <calcite-chip class={`authenticity-${analysis.name.toLowerCase().replace(' ', '-')}`} value="calcite chip" icon={analysis.icon}>{analysis.name}</calcite-chip>;
  }

  renderSentiment(sentiment: number) {
    const analysis = getAnalysisValue(sentiment, sentimentAnalysis);
    return <calcite-chip class={`sentiment-${analysis.name.toLowerCase().replace(' ', '-')}`} value="calcite chip" icon={analysis.icon}>{analysis.name}</calcite-chip>;
  }

  renderToxiticity(toxicity: number) {
    const analysis = getAnalysisValue(toxicity, toxicityAnalysis);
    return <calcite-chip class={`toxicity-${analysis.name.toLowerCase().replace(' ', '-')}`} value="calcite chip" icon={analysis.icon}>{analysis.name}</calcite-chip>;
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
              {this.renderToxiticity(this.post.properties.toxicity)}
              {this.renderSentiment(this.post.properties.sentiment)}
              {this.renderAuthenticity(this.post.properties.authenticity)}<br/>
              </div>
            
            <div slot="footer-end">
              <calcite-select width="m">
                <calcite-option value="approved" selected={this.post.properties.status === 'approved'}>Approved</calcite-option>
                <calcite-option value="pending"selected={this.post.properties.status === 'pending'}>Pending</calcite-option>
                <calcite-option value="hidden"selected={this.post.properties.status === 'hidden'}>Hidden</calcite-option>
              </calcite-select>
            </div>
        </calcite-card>
        <em>...</em>
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
  private renderRationales() {
    return <calcite-accordion>
      <calcite-accordion-item description={this.post.properties.toxicity} expanded heading="Toxicity Rationale" icon-start="">
        {this.post.properties.toxicityRationale}<br />
      </calcite-accordion-item>
      <calcite-accordion-item description={this.post.properties.sentiment} expanded heading="Sentiment Rationale" icon-start="">
        {this.post.properties.sentimentRationale}<br />
      </calcite-accordion-item>
      <calcite-accordion-item description={this.post.properties.authenticity} expanded heading="Authenticity Rationale" icon-start="">
        {this.post.properties.authenticityRationale}<br />
      </calcite-accordion-item>
    </calcite-accordion>;
  }
}
