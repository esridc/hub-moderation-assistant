Prototype for automated content moderation using generative AI

August 2024

[Epic details](https://devtopia.esri.com/dc/hub/issues/11003)

## Architecture

- [API Interface](https://lucid.app/lucidchart/ef2a8a63-34b2-45eb-bc85-66f2158f3a59/edit?invitationId=inv_6506d368-63fc-4843-99ee-e42d519f0726&page=les1OhWRowds#)

## Endpoints

- [QA API for Aggregations](https://opendataqa.arcgis.com/api/search/definition/#/default/OgcItemAggregationController_getAggregationsV2)
- [Post Search API](https://opendatadev.arcgis.com/api/search/v2/collections/discussion-post/items?filter=sentiment%20is%20not%20null%20)

## Examples

- [Search for posts > Toxicity 0.5](https://opendatadev.arcgis.com/api/search/v2/collections/discussion-post/items?filter=toxicity%20%3C%200.5)
- [Search for posts in range](https://opendatadev.arcgis.com/api/search/v2/collections/discussion-post/items?filter=sentiment%3E=0.0%20and%20sentiment%3C=0.5))
