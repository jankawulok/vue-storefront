<template>
  <div class="sw-bottom-navigation">
    <SfBottomNavigation>
      <nuxt-link aria-label="Go to Home Page" :to="localePath('/')">
        <SfBottomNavigationItem label="Home" icon="home" icon-size="20px" />
      </nuxt-link>
      <SfBottomNavigationItem
        icon="menu"
        icon-size="20px"
        label="Menu"
        class="menu-button"
        @click="toggleCategoryMenu" 
      >
        <template #icon>
          <SfIcon icon="menu" size="20px" style="width: 25px;"   />
        </template>
      </SfBottomNavigationItem>
      <SfBottomNavigationItem
        icon="profile"
        label="My Account"
        class="menu-button"
      >
        <template #icon>
          <SfIcon icon="profile" size="20px" @click="toggleLoginModal" />
          <SfSelect v-if="isLoggedIn" class="menu-button__select">
            <!-- TODO: change .native to @click after https://github.com/DivanteLtd/storefront-ui/issues/1097 -->
            <SfSelectOption
            >
              My account
            </SfSelectOption>
            <!-- TODO: change .native to @click after https://github.com/DivanteLtd/storefront-ui/issues/1097 -->
            <SfSelectOption :value="'logout'">
              <SfButton class="sf-button--full-width" @click="logoutUser">
                Logout
              </SfButton>
            </SfSelectOption>
          </SfSelect>
        </template>
      </SfBottomNavigationItem>
      <SfBottomNavigationItem
        icon="empty_cart"
        label="Cart"
        :is-floating="true"
      >
        <template #icon>
          <SfCircleIcon
            aria-label="Go to Cart"
            icon="empty_cart"
            :has-badge="cartTotalItems > 0"
            :badge-label="cartTotalItems"
            @click="toggleCartSidebar"
          />
        </template>
      </SfBottomNavigationItem>
    </SfBottomNavigation>
  </div>
</template>

<script>
import {
  SfBottomNavigation,
  SfCircleIcon,
  SfIcon,
  SfSelect,
  SfProductOption,
} from "@storefront-ui/vue"
import uiState from '~/assets/ui-state';
import { useWishlist, useCart, cartGetters } from "@jkawulok/prestashop-composables"
import { onMounted, computed, ref } from "@vue/composition-api"

const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, toggleCategoryMenu } = uiState;

export default {
  name: "SwBottomNavigation",
  components: {
    SfBottomNavigation,
    SfIcon,
    SfCircleIcon,
    SfSelect,
    SfProductOption,
  },
  data() {
    return {
      navigationElements: [],
      currentRoute: { routeLabel: "", routePath: "/" },
    }
  },
  setup() {

    const { cart, loadCart } = useCart();
    const { loadWishlist } = useWishlist();

    // const { routes, fetchRoutes } = useNavigation()
    // const { isLoggedIn, logout } = useUser()
    const isLoggedIn = ref(false);
    const logout = ref(false);
    const routes = ref([]);
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });
    return {
      isLoggedIn,
      logout,
      routes,
      cartTotalItems,
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      toggleCategoryMenu
    }
  },
  computed: {
    getPageAccount() {
      return PAGE_ACCOUNT
    },
  },
  watch: {
    currentRoute(nextRoute) {
    //   this.$router.push(this.$i18n.path(nextRoute.routeLabel))
    },
  },
  methods: {
    userIconClick() {
      if (this.isLoggedIn) {
        // this.$router.push(this.$i18n.path(PAGE_ACCOUNT))
      } else this.toggleModal()
    },
    goToMyAccount() {
    //   this.$router.push(this.$i18n.path(PAGE_ACCOUNT))
    },
    async logoutUser() {
    //   await this.logout()
    //   this.$router.push(this.$i18n.path("/"))
    },
  },
}
</script>
<style lang="scss" scoped>
.sw-bottom-navigation {
  align-items: center;
}
.menu-button {
  position: relative;
  &__currency {
    --select-padding: 0;
    --select-height: 2rem;
    --select-color: #afb0b6;
  }
  &__select {
    --chevron-size: 0;
    --select-margin: 0;
    text-align: center;
    position: absolute;
    text-transform: uppercase;
  }
}
</style>