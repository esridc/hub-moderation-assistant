import { Component, Host, Prop, h } from '@stencil/core';
import { HubPostSummary } from '../../util/search';

@Component({
  tag: 'hub-posts-summary',
  styleUrl: 'hub-posts-summary.css',
  shadow: true,
})
export class HubPostsSummary {

  @Prop() summary: HubPostSummary = {};

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="summary">
          <h3>Summary</h3>
          <p>{this.summary.text}</p>
        </div>
      </Host>
    );
  }

}
