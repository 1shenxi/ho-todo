<template>
  <main class="index-container">
    <section class="index-content">
      <div class="index-content__wrapper">
        <header class="index-content__header">
          <b-input placeholder="What do you wanna do?"></b-input>
        </header>

        <ul class="index-content__list">
          <li v-for="item in list" :key="item.id" class="index-content__list-item">
            <b-input v-model="item.title"></b-input>
          </li>
        </ul>
      </div>
    </section>

    <aside class="index-aside">
      具体内容
    </aside>
  </main>
</template>

<script lang="ts" setup>
const list = [
  {
    id: '1',
    title: '1111',
    computed: false,
  },
  {
    id: '2',
    title: '222',
    computed: false,
  }
]
</script>

<style lang="scss" scoped>
.index-container {
  margin: 60px auto 0;
  display: flex;
  justify-content: center;
}

.index-content {
  flex: 1;

  &__wrapper {
    width: 100%;
    padding: 0 50px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  &__header {
    margin-bottom: 20px;
  }

  &__list {}

  &__list-item {
    border-bottom: 1px solid;
  }
}

.index-aside {
  width: 400px;
  height: 100vh;
}
</style>
