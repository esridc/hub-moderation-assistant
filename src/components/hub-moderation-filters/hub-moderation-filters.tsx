import { EventEmitter, Component, Host, Listen, h, Event } from '@stencil/core';
import { getAnalysisConfiguration } from '../../util/analysis';

@Component({
  tag: 'hub-moderation-filters',
  styleUrl: 'hub-moderation-filters.css',
  shadow: true,
})
export class HubModerationFilters {

  searchInput: HTMLInputElement;
  moderationSelect: HTMLSelectElement;

  filterSelects  = {};
  
  @Event() filtersChanged: EventEmitter<any>;

  componentDidLoad() {
    this.onSelectChange(null);
  }
  render() {
    return (
      <Host>
        <slot></slot>
        {this.renderFilters()}
      </Host>
    );
  }

  @Listen('calciteInputChange')
  @Listen('calciteInputInput')
  onInputChange(_event: CustomEvent) {
    console.log('Input change:', this.searchInput.value);
    this.filtersChanged.emit({ body: this.searchInput.value });
  }

  @Listen('calciteSelectChange')
  onSelectChange(_event: CustomEvent) {
    // let toxicityRange;
    // switch (this.toxicitySelect.value) {
    //   case 'approved':
    //     toxicityRange = [0.5, 1] ;
    //     break;
    //   case 'pending':
    //     toxicityRange = [-0.5, 0.5];
    //     break;
    //   case 'toxic':
    //     toxicityRange = [-1, -0.5];
    //     break;
    // }
    // let sentimentRange;
    // switch (this.sentimentSelect.value) {
    //   case 'positive':
    //     sentimentRange = [0.5, 1];
    //     break;
    //   case 'neutral':
    //     sentimentRange = [-0.5, 0.5];
    //     break;
    //   case 'negative':
    //     sentimentRange = [-1, -0.5];
    //     break;
    // }    

    const filters = {};
    for (const name in this.filterSelects) {
      const analysisConfiguration = getAnalysisConfiguration(name);
      const selectedAnalysis = analysisConfiguration.find(analysis => analysis.name.toLowerCase() === this.filterSelects[name].value);
      filters[name] = [selectedAnalysis.range[0], selectedAnalysis.range[1]];
    }
    this.filtersChanged.emit(
      filters
    );
  }

  renderFilters() {
    return(
      <div>
        <calcite-block heading="Matching terms" open>
          <div class="filter-fields">
            <calcite-input class="panel-input" placeholder="Search by term" ref={(el) => this.searchInput = el}></calcite-input>
          </div>
        </calcite-block>

        {this.renderFilterModeration()}
        {/* {this.renderFilterToxicity()}
        {this.renderFilterSentiment()}
        {this.renderFilterAuthenticity()} */}
        {this.renderFilter('toxicity')}
        {this.renderFilter('sentiment')}
        {this.renderFilter('authenticity')}
      </div>

    )
  }
  private renderFilter(name: string) {
    const analysisConfiguration = getAnalysisConfiguration(name);

    return <div class="filter buffer">
      <calcite-block heading={`${name} estimation`} open>
        <div class="filter-fields">
          <calcite-select
            ref={(el) => this.filterSelects[name] = el}
          >
            {analysisConfiguration.map((analysis) => {
              return <calcite-option selected={analysis.selected} value={analysis.name.toLowerCase()}>{analysis.name}</calcite-option>
            })}
          </calcite-select>
          </div>
      </calcite-block>
    </div>;
  }
  private renderFilterModeration() {
    return <div class="filter buffer">
      <calcite-block heading="Moderation status" open>
        <div class="filter-fields">
          <calcite-select
            ref={(el) => this.moderationSelect = el}
          >
            <calcite-option value="approved" selected>Approved</calcite-option>
            <calcite-option value="pending">Pending</calcite-option>
            <calcite-option value="hidden">Hidden</calcite-option>
          </calcite-select>
          </div>
      </calcite-block>
    </div>;
  }


}
