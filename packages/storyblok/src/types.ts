import { Ref } from '@vue/composition-api';

export type ComputedProperty<T> = Readonly<Ref<Readonly<T>>>;
export interface UseContent<CONTENT, CONTENT_SEARCH_PARAMS> {
  search: (params: CONTENT_SEARCH_PARAMS) => Promise<void>;
  content: ComputedProperty<CONTENT>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<string | null>;
}
