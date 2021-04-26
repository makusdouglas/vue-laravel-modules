<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #53284f"
  >
    <a class="navbar-brand" href="#">Petruz</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form> -->
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  padding: 5px 30px;
  background: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #ddd;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: rgba($color: #42b983, $alpha: 0.8);
    }
  }
}
#nav-user {
  display: flex;
  span {
    height: 52px;
    width: 42px;
    background: #303030;
    padding: 5px 10px;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      bottom: calc(50% - 10px);
      right: -18px;

      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 10px solid #eee;
    }
  }
}
</style>
