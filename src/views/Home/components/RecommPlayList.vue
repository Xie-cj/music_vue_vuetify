<template>
  <div
    :style="{ marginTop: fontSize * 1.5 + 'px', fontSize: fontSize * 2 + 'px' }"
    class="recomm"
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
          <v-hover v-slot:default="{ hover }">
            <v-responsive
              v-ripple
              :class="{'hover elevation-8': hover || fontSize <= 10, 'large-size': fontSize > 10}"
              class="list-item rounded-lg bj05"
              :aspect-ratio="1 / 1"
            >
              <v-img
                width="100%"
                height="100%"
                :src="item.picUrl"
                :lazy-src="`${item.picUrl}?param=27y27`"
              ></v-img>
              <div
                v-show="item.name"
                :style="{ fontSize: fontSize2 + 'px' }"
                class="text"
              >
                <p class="title">{{ item.name }}</p>
              </div>
            </v-responsive>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "recomm",
  props: {
    title: {
      type: String,
      default: "推荐歌单",
    },
  },
  data() {
    return {
      listData: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ],
    };
  },
  methods: {
    itemClick(item) {
      console.log(item);
      this.$router.push({
        name: 'Playlist',
        query: {
          id: item.id
        }
      })
    },
  },
  created() {
    this.$api.personalized({ limit: 6 }).then((res) => {
      this.listData = res.result;
      this.$emit("onLoad");
    });
  },
  computed: {
    fontSize() {
      return this.$fontSize();
    },
    fontSize2() {
      return this.$fontSize2();
    },
  }
};
</script>

<style lang="scss" scoped>
.recomm {
  font-size: 1rem;
  .list-box {
    font-size: 0.75em;
    .list-item-container {
      ::v-deep .theme--light.v-sheet--outlined {
        border: none !important;
      }
      .list-item {
        transition: 0.25s;
        position: relative;
        cursor: pointer;
        .text {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 10px 0;
          box-sizing: border-box;
          color: #fff;
          width: 100%;
          height: 4em;
          transition: 0.25s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .title {
            font-size: 1em !important;
            line-height: 1.5em;
            margin: 0 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
        &.hover {
          &.large-size {
            transform: scale(1.05);
          }
          .text {
            height: 100%;
            .title {
              overflow: visible;
              text-overflow: clip;
              display: block;
              -webkit-box-orient: block;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
    }
  }
}
</style>