<template>
  <div class="container">
    <h1 class="title">Comics</h1> <!-- Title -->
    <div class="main-center"> <!-- Parent Div -->
      <div class="tiles">
        <div class="comic" v-for="(comic,  index) in comics" :key="index">
          <div>
            <div class="comic-thumbnail">
              <img :src="comic.thumbnail_url" />
            </div>
            <div class="series-name">
              <span >{{comic.series_name}}</span>
            </div>
            <div class="comic-title">
              <span>{{comic.title}}</span>
            </div>
            <div class="comic-description">
               <span v-html="comic.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  mounted () {
    this.getData()
  },
  data () {
    return {
      comics: {}
    }
  },
  methods: {
    getData () {
      axios.get(`${vueConfig.url}/api/comics`, {params: {
        'api_token': 'foo_bar'
      }}).then((res) => {
        if (res.data.error === false) {
          this.comics = res.data.data
        } else {
          alert('Something went wrong!')
        }
      })
    }
  }
}
</script>

<style scoped>
.title{
  color: #1E90FF;
  text-decoration: underline;
  display: flex;
}
.container{
  position: relative;
  text-align: center;
}
.main-center{
  width: 100%;
}
.comic{
    width: 480px;
    height: 380px;
    margin: 40px 65px 0px 65px;
    display: inline-flex;
    align-content: space-between;
    text-align: left;
    font-family: 'Lato',sans-serif;
}
.comic div{
    margin-bottom: 5px;
}
.comic-thumbnail{
  height: 300px;
}
.comic-thumbnail img{
    object-fit: cover;
    width: 480px;
    height: 280px;
    border-radius: 6px;
}
.series-name{
  font-size: 13px;
  color: #33c4f2;
}
.comic-title{
  font-size: 16px;
  font-weight: 600;
  color: #333
}
.comic-description{
  font-size: 12px;
  width: 480px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 380px;
}
</style>
