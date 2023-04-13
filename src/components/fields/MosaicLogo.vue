<template>
	<div>
		<div v-if="iconUrl" title="Icon">
			<img :src="iconUrl" @error="iconUrlErr" class='mosaic-logo' />
		</div>
	</div>
</template>

<script>
import IconTWIX from '../../styles/img/logo_32.png';
import IconMosaic from '../../styles/img/mosaic.svg';
import IconErr from '../../styles/img/error-icon.svg';
import defaultConfig from '../../config/default.json';
export default {
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	computed: {
		iconUrl() {
            if(this.value.mosaicId === defaultConfig.networkConfig.mosaicId) {
                return IconTWIX;
            } else if(this.value.mosaicLogo === 'N/A') {
                return IconMosaic;
            } else {
                return this.value.mosaicLogo;
            }
		}
	},
    methods: {
        iconUrlErr(event) {
            event.target.src=IconErr;
            event.target.title="Image Error";
        }
    }
};
</script>

<style lang="scss" scoped>
.mosaic-logo {
    height: 32px;
    width: 32px;
    }
</style>
