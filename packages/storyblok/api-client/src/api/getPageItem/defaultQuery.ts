import gql from 'graphql-tag';

export default gql`
  query PageItems(
    $first_published_at_gt: String,
    $first_published_at_lt: String,
    $starts_with: String,
    $by_uuids: String,
    $by_uuids_ordered: String,
    $excluding_ids: String,
    $excluding_fields: String,
    $resolve_links: String,
    $resolve_relations: String,
    $from_release: String,
    $sort_by: String,
    $search_term: String,
    $is_startpage: String,
    $language: String,
    $with_tag: String,
    $page: String,
    $per_page: String,
  ){
    PageItems(
      first_published_at_gt: $first_published_at_gt,
      first_published_at_lt: $first_published_at_lt,
      starts_with: $starts_with,
      by_uuids: $by_uuids,
      by_uuids_ordered: $by_uuids_ordered,
      excluding_ids: $excluding_ids,
      excluding_fields: $excluding_fields,
      resolve_links: $resolve_link,
      resolve_relations: $resolve_relations,
      from_release: $from_release,
      sort_by: $sort_by,
      search_term: $search_term,
      is_startpage: $is_startpage,
      language: $language,
      with_tag: $with_tag,
      page: $page,
      per_page: $per_page,
      filter_query: $filter_query
    ) {
      total
      items {
        id
        created_at
        full_slug
        group_id
        uuid
        is_startpage
        tag_list
        meta_data
        content {
          B
          _editable
          _uid
          body
          component
        }
      }
    }
  }
`;
