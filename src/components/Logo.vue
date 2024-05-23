<template>
    <div class="menu">
        <img src="@/assets/my-logo.png" alt="Rafael" >
    </div>
</template>

<script>
export default {
  name: 'Logo',
  
}
</script>
<style scoped lang="scss">
.menu{
    position: absolute;
    right: 45%;
    top: 1%;
    width: 100%;
    img {
        width: 8%;
        border-radius: 10%;
    }
}
</style>