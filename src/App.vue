<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">WHU</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.whufc.com/">West Ham Site</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Home</router-link>
              <router-link class="dropdown-item" to="/signup">Signup</router-link>
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/logout">Logout</router-link>
              <router-link class="dropdown-item" to="/products/new">Add Player</router-link>
              <div class="dropdown-divider"></div>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Player Name" aria-label="Search">
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search Player</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>

</style>
