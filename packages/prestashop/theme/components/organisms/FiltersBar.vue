<template>
  <div class="filters-bar">
      <SfSelect
      v-for="(filter, key) in filters"
      :key="key"
      v-model="selected"
      :class="customClass"
      :label="filter.label"
      :required="filter.required"
      :valid="filter.valid"
      :disabled="filter.disabled"
      :error-message="errorMessage"
      style="max-width: 30rem;"
    >
      <SfSelectOption
        v-for="(option, key) in filter.options"
        :key="key"
        :value="option.value"
      >
        {{ option.label }}
      </SfSelectOption>
    </SfSelect>
  </div>
</template>

<script>
import { SfSelect, SfProductOption } from '@storefront-ui/vue';

export default {
  components: {
    SfSelect,
    SfProductOption,
  },
  data() {
    return {
      filters: [
        {
          options: [
            { value: "chlopeic", label: "Chłopeic" },
            { value: "dziewczynka", label: "Dziewczynka" },
          ],
          label: "Wybierz płeć",
          required: false,
          valid: true,
          disabled: false,
          errorMessage: "Color",
        },
        {
          options: [
            { value: "chlopeic", label: "Chłopeic" },
            { value: "dziewczynka", label: "Dziewczynka" },
          ],
          label: "Wybierz wiek",
          required: false,
          valid: true,
          disabled: false,
          errorMessage: "Color",
        },
        {
          options: [
            { value: "chlopeic", label: "Chłopeic" },
            { value: "dziewczynka", label: "Dziewczynka" },
          ],
          label: "Wybierz kategorię",
          required: false,
          valid: true,
          disabled: false,
          errorMessage: "Color",
        },

      ]
      
    };
  },
};
</script>