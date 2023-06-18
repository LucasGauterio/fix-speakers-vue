<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-btn size="250" icon="" :color="color" class="rounded-button" @click="togglePlayer" @ended="onEnded">{{ playing ? $t('stop') : $t('play') }}</v-btn>
    </v-row>
    <audio ref="audio" :src="mp3" ></audio>
  </v-container>
</template>
<style>
.rounded-button {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}
</style>
<script>
import fixspeaker from '/audio/cleaner.mp3';

export default {
  name: 'Player',
  data() {
    return {
      playing: false,
      volume: 100,
      mp3: fixspeaker,
      color: 'green'
    };
  },
  methods: {
    togglePlayer() {
      if (this.playing) {
        this.$refs.audio.pause();
        this.color = 'green';
      } else {
        this.$refs.audio.play();
        this.color = 'red';
      }
      this.playing = !this.playing;
    },
    onEnded() {
      this.playing = false;
    }
  },
};
</script>