<template>
  <div
    :style="{ marginTop: $fontSize() * 0.5 + 'px', fontSize: $fontSize() * 2 + 'px' }"
    class="popular-singer"
  >
    <h2 style="font-size: 1em">{{ title }}</h2>
    <v-row class="list-box">
      <v-col
        class="list-item-container"
        v-for="item in listData"
        :key="item.id"
        @click="itemClick(item)"
        cols="6"
        lg="2"
        md="4"
        sm="4"
        xs="6"
      >
        <v-card outlined tile>
          <v-hover class="" v-slot:default="{ hover }">
            <div class="list-item">
              <v-responsive
                v-ripple
                :class="{'hover elevation-8': hover || $fontSize() <= 10, 'large-size': $fontSize() > 10}"
                class="transition rounded-circle bj05"
                :aspect-ratio="1 / 1"
              >
                <div class="img-box">
                  <v-img
                    width="100%"
                    height="100%"
                    :src="item.picUrl"
                    :lazy-src="`${item.picUrl}?param=27y27`"
                  ></v-img>
                </div>
              </v-responsive>
              <p :style="{ fontSize: $fontSize2() * 1.25 + 'px' }" class="name">{{item.name}}</p>
            </div>            
          </v-hover>          
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
  name: 'popular-singer',
  props: {
    title: {
      type: String,
      default: '歌手列表'
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick(item) {
      console.log(item)
    }
  },
  };
</script>

<style scoped lang="scss">
  .popular-singer {
    .list-box {
      .list-item-container {
        cursor: pointer;
        ::v-deep .theme--light.v-sheet--outlined {
          border: none !important;
        }
        ::v-deep .theme--light.v-card {
          background-color: transparent !important;
        }
        .list-item {
          & > * {
            transition: 0.25s;
          }
          .img-box {
            width: 100%;
            height: 100%;
          }
          .large-size.hover {
            transform: scale(1.05);
          }
        }
        .name {
          margin: 10px 0 0 0;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>