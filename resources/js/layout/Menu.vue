<template>
  <nav class="col-2 collapse show d-md-flex bg-light pt-2 pl-0" id="sidebar">
    <ul class="nav flex-column flex-grow-1">
      <nav-group>
        <nav-comp-item
          name="Dashboard"
          className="nav-link collapsed text-truncate"
          href="#submenudashboard"
          datatoggle="collapse"
          datatarget="#submenudashboard"
          selected
          :chevron="true"
        >
          <dashboard-icon :size="16"></dashboard-icon>
        </nav-comp-item>
        <div class="collapse" id="submenudashboard" aria-expanded="true">
          <ul class="flex-column pl-2 nav">
            <li class="nav-item">
              <a class="nav-link py-0" href="#"><span>Orders</span></a>
            </li>
          </ul>
        </div>
      </nav-group>

      <li class="nav-item">
        <a class="nav-link text-truncate" href="#"
          ><i class="fa fa-home"></i>
          <span class="d-none d-sm-inline">Overview</span></a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed text-truncate"
          href="#submenu1"
          data-toggle="collapse"
          data-target="#submenu1"
        >
          <i class="fa fa-table"></i>
          <span class="d-none d-sm-inline">Reports</span>
        </a>
        <div class="collapse" id="submenu1" aria-expanded="false">
          <ul class="flex-column pl-2 nav">
            <li class="nav-item">
              <a class="nav-link py-0" href="#"><span>Orders</span></a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link collapsed py-1"
                href="#submenu1sub1"
                data-toggle="collapse"
                data-target="#submenu1sub1"
              >
                <span>Customers</span>
              </a>
              <div class="collapse" id="submenu1sub1" aria-expanded="false">
                <ul class="flex-column nav pl-4">
                  <li class="nav-item">
                    <a class="nav-link p-1" href="#">
                      <i class="fa fa-fw fa-clock-o"></i> Daily
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-1" href="#">
                      <i class="fa fa-fw fa-dashboard"></i> Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-1" href="#">
                      <i class="fa fa-fw fa-bar-chart"></i> Charts
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-1" href="#">
                      <i class="fa fa-fw fa-compass"></i> Areas
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link text-truncate" href="#"
          ><i class="fa fa-bar-chart"></i>
          <span class="d-none d-sm-inline">Analytics</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-truncate" href="#"
          ><i class="fa fa-download"></i>
          <span class="d-none d-sm-inline">Export</span></a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import NavItem from "../components/NavItem";
import NavGroup from "../components/NavItemsGroup";
import DashboardIcon from "vue-material-design-icons/ViewDashboardOutline";
export default {
  data: {
    open: true,
  },
  components: {
    "nav-comp-item": NavItem,
    "nav-group": NavGroup,
    DashboardIcon,
  },
};
</script>

<style lang="scss">
#sidebar {
  width: 240px;
  background: #f5f5f5;
  border-right: 1px solid #ccc;
  height: calc(100vh - 55px);
}
</style>

