import { Component, Host, Listen, Prop, State, h } from '@stencil/core';
import { setAssetPath } from '@esri/calcite-components/dist/components';
import { fetchPosts, PostFilters } from '../../util/search';

setAssetPath('https://js.arcgis.com/calcite-components/2.11/assets');

@Component({
  tag: 'hub-moderation-assistant',
  styleUrl: 'hub-moderation-assistant.css',
  shadow: true,
})
export class HubModerationAssistant {

  @Prop() entityId: string = null;
  /** Discussion channel */
  @Prop() channelId: string = "1bbb9933-16c6-41ec-b187-411a9bca79bd";



  @State() posts: any[] = [];

  @State() org: any = {
    name: "CityX"
  }

  @State() entity: any = {
    title: "Green CityX",
    type: "Discussion Board"
  }

  componentWillLoad() {
    this.fetchPosts();
  }

  @Listen('filtersChanged')
  async onFiltersChanged(event: CustomEvent) {
    console.log('Filters changed:', event.detail);
    // Fetch posts with new filters
    await this.fetchPosts(event.detail);
  }

  async fetchPosts(filters = {}) {
    const params:PostFilters = {
      ...filters
    }
    const context = {      
      limit: 100,
      channelId: this.channelId,
}
    try {
      // Fetch posts from API using search util
      const data = await fetchPosts( params,  context);
      
      this.posts = data.features;
      // Process the fetched data
      // ...
      
      // Update component state or do something with the data
      // ...
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <em>Moderation Assistant Component</em>
        {this.renderShell()}
      </Host>
    );
  }
  renderShell() {
    return(
      <calcite-shell>
        
        {/* Header */}
        <calcite-navigation slot="header">
          <calcite-navigation-logo slot="logo" heading={this.org.name} thumbnail="https://pbs.twimg.com/profile_images/1541896616482787328/S0qJH4P4_400x400.png"></calcite-navigation-logo>
          <div class="nav-actions" slot="content-end">
            <calcite-button round>Create</calcite-button>
            <calcite-button round icon-start="bell" kind="neutral" appearance="transparent"></calcite-button>
          </div>
          <calcite-navigation-user slot="user" full-name="Jack Dangermond" username="jdangermond"></calcite-navigation-user>
          <calcite-navigation slot="navigation-secondary">
            <calcite-menu slot="content-start">
              <calcite-menu-item breadcrumb text-enabled text="Home" icon-start="home"></calcite-menu-item>
              <calcite-menu-item text-enabled text={this.entity.title} icon-start="browser" active></calcite-menu-item>
            </calcite-menu>
            <div class="nav-actions spacer-right" slot="content-end">
              <calcite-button round appearance="transparent" kind="neutral">View {this.entity.type}</calcite-button>
              <calcite-button round appearance="transparent" kind="neutral" icon-start="globe">Share</calcite-button>
              <calcite-button round appearance="transparent" kind="neutral" icon-start="ellipsis"></calcite-button>
            </div>
          </calcite-navigation>
        </calcite-navigation>
        {/* /Header */}
        
        {/* Left Panel */}
        <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
          <calcite-action-bar slot="action-bar" expanded expand-disabled>
            <calcite-action-group>
              <calcite-action icon="home" text="Overview"></calcite-action>
              <calcite-action icon="speech-bubbles" text="Moderation" active></calcite-action>
              <calcite-action icon="collaboration-user" text="Community"></calcite-action>
            </calcite-action-group>
            <calcite-action-group slot="bottom-actions">
                {/* <calcite-action text="Help" icon="question"></calcite-action> */}
                <calcite-action icon="gear" text="Settings"></calcite-action>
            </calcite-action-group>
          </calcite-action-bar>
          <calcite-panel heading="Filter" id="panel-end" expanded>
            <hub-moderation-filters></hub-moderation-filters>
          </calcite-panel>
        </calcite-shell-panel>
        {/* /Left Panel */}
        
        {/* Body */}
        <calcite-panel slot="">
          <div class="page">
            <hub-posts-results posts={this.posts}></hub-posts-results>
          </div>
        </calcite-panel>
        {/* /Body */}
        
        {/* Right Panel */}
        {/* <calcite-shell-panel slot="panel-end" position="end" id="shell-panel-end" expanded>
          <calcite-action-bar slot="action-bar">
            <calcite-action text="Filter" icon="sliders-horizontal" active></calcite-action>
            <calcite-action text="Design" icon="auto-layout"></calcite-action>
          </calcite-action-bar>
          <calcite-panel heading="Filter" id="panel-end" expanded>
            <hub-moderation-filters></hub-moderation-filters>
          </calcite-panel>
        </calcite-shell-panel> */}
        {/* /Right Panel */}
      
      </calcite-shell>
    )
  }


}
