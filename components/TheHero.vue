<template>
  <div class="overlay">
    <img src="/home.jpg" class="w-full" alt="home" />
    <div class="info-container md:absolute">
      <img src="/name.png" alt="name" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.overlay {
  position: relative;
  &::after {
    position: absolute;
    inset: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgb(18, 18, 18);
    background: linear-gradient(
      90deg,
      #121212 0%,
      rgba(18, 18, 18, 0.26934523809523814) 29%,
      rgba(0, 0, 0, 0) 100%
    );
    @media (max-width: 768px) {
      position: unset;
    }
  }

  .info-container {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    z-index: 10;
    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      align-items: center;
      img {
        width: 50%;
      }
    }
  }
}
</style>
