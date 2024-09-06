import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-posts-results',
  styleUrl: 'hub-posts-results.css',
  shadow: true,
})
export class HubPostsResults {

  @Prop() posts: any[] = [];

  render() {
    return (
      <Host>
        <slot></slot>
        {this.renderPostsGrid(this.posts)}
      </Host>
    );
  }
  renderPostsGrid(posts: any[]) {
    const rows = []
    posts.map((post) => {
      rows.push(
        <hub-post-card post={post}></hub-post-card>
      )
    })
    return(
      <div class="layout-grid">
        {rows}
      </div>
    )
  }

  renderPostsTable(posts: any[]) {
    const rows = []
    posts.map((post) => {
      rows.push(
        <calcite-table-row>
          <calcite-table-cell>
            <hub-post-card post={post}></hub-post-card>
          </calcite-table-cell>
          <calcite-table-cell>{post.properties.creator}</calcite-table-cell>
          <calcite-table-cell>{post.properties.title}</calcite-table-cell>
          <calcite-table-cell>{post.properties.body}</calcite-table-cell>
          <calcite-table-cell>{post.properties.status}</calcite-table-cell>
          <calcite-table-cell id={`post-${post.id}-toxicity`}>{post.properties.toxicity}
              <calcite-action slot="header-actions-end" icon="question" text="Explain" id={`post-${post.id}-toxicity-explained`}></calcite-action>
              <calcite-tooltip reference-element={`post-${post.id}-toxicity-explained`} label="Catalog help">
              <span>Open web help to learn more...</span>
            </calcite-tooltip>

          </calcite-table-cell>
        </calcite-table-row>
      )
    })
    return(
      <div>
        <calcite-table caption="Simple table">
            <calcite-table-row slot="table-header">
              <calcite-table-header heading="Author" description=""></calcite-table-header>
              <calcite-table-header heading="Title" description=""></calcite-table-header>
              <calcite-table-header heading="Body" description=""></calcite-table-header>
              <calcite-table-header heading="Status" description=""></calcite-table-header>
              <calcite-table-header heading="Toxicity" description="-1 to 1"></calcite-table-header>
            </calcite-table-row>
            { rows }
        </calcite-table>
                <calcite-button class="panel-action" round appearance="outline-fill">Export as CSV</calcite-button>
    </div>
    )
  }

}
