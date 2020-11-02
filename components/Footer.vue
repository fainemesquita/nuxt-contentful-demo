<template>
    <footer>
        <div class="container pt-3 pb-3 text-white">
            <div class="grid grid-lg-3">
                <div>
                    <img src="~assets/images/logo-leap-secondary.svg" style="max-width:100px; width:100%;" alt="LEAP logo orange">
                    <p class="text-white mt-1">Copyright © 2020 LEAP Legal Software. All rights reserved.</p>
                </div>
                <div>
                    <h3 class="text-white mb-1 mt-0">Contact Us</h3>
                    <p class="text-white mb-0">For further discussion regarding whether LEAP is right for your firm, please contact Malcolm.</p>
                    <div class="grid grid-footer mt-2">
                        <img src="~assets/images/footer-profile-malcolm.png"  class="display-sm" style="max-width:100px; width:100%;" alt="Malcolm picture">
                        <div>
                            <h5 class="text-white mb-1 font-weight-600">Malcolm Muthulingum</h5>
                            <p class="text-white mb-0">Chief Executive Officer</p>
                            <p class=" mb-0"><a href="mailto:malcolm.muthulingum@leaplegalsoftware.ca" class="text-white"> malcolm.muthulingum@leaplegalsoftware.ca</a></p>
                            <p><a href="tel:4164342639" class="text-white">416 434 2639</a></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-white mb-1 mt-0">Also Visit</h3>
                    <p>
                        <a
                        href="https://www.leaplegalsoftware.com/"
                        class="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="gtag('event', 'Footer Click LEAP Legal Software', {
                        'event_category': 'Footer Click LEAP Legal Software',
                        'event_label':  'Footer Click LEAP Legal Software'});">
                        <span class="img-inline mr-1">
                            <img src="~assets/images/icon-world.svg" 
                                alt="Visit LEAP Legal Software Website"
                                title="Visit LEAP Legal Software Website"
                                style="max-width:50px; width:100%;">
                        </span>
                        www.leaplegalsoftware.com
                        </a>
                    </p>
                    <p>
                        <a
                        href="https://www.leap.us/"
                        class="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="gtag('event', 'Footer Click LEAP US', {
                        'event_category': 'Footer Click LEAP US',
                        'event_label':  'Footer Click LEAP US'});">
                        <span class="img-inline mr-1">
                            <img src="~assets/images/united-states.png" 
                                alt="Visit LEAP US Website"
                                title="Visit LEAP US Website"
                                style="max-width:50px; width:100%;">
                        </span>
                        www.leap.us
                        </a>
                    </p>
                    <p>
                        <a
                        href="https://www.leap.co.uk"
                        class="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="gtag('event', 'Footer Click LEAP UK', {
                        'event_category': 'Footer Click LEAP UK',
                        'event_label':  'Footer Click LEAP UK'});">
                        <span class="img-inline mr-1">
                            <img src="~assets/images/united-kingdom.png" 
                                alt="Visit LEAP UK Website"
                                title="Visit LEAP UK Website"
                                style="max-width:50px; width:100%;">
                        </span>
                        www.leap.co.uk
                        </a>
                    </p>
                    <p>
                        <a
                        href="https://www.leapsoftware.ie/"
                        class="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="gtag('event', 'Footer Click LEAP Ireland', {
                        'event_category': 'Footer Click LEAP Ireland',
                        'event_label':  'Footer Click LEAP Ireland'});">
                        <span class="img-inline mr-1">
                            <img src="~assets/images/ireland.png" 
                                alt="Visit LEAP Ireland Website"
                                title="Visit LEAP Ireland Website"
                                style="max-width:50px; width:100%;">
                        </span>
                        www.leapsoftware.ie
                        </a>
                    </p>
                    <p>
                        <a
                        href="https://www.leap.com.au/"
                        class="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click="gtag('event', 'Footer Click LEAP AU', {
                        'event_category': 'Footer Click LEAP AU',
                        'event_label':  'Footer Click LEAP AU'});">
                        <span class="img-inline mr-1">
                            <img src="~assets/images/australia.png" 
                                alt="Visit LEAP Australia Website"
                                title="Visit LEAP Australia Website"
                                style="max-width:50px; width:100%;">
                        </span>
                        www.leap.com.au 
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #303030;
}
.grid-footer {
    @media screen and (min-width: 0){
    grid-template-columns: 1fr 4fr;
    grid-gap: 1rem;
    }
}
.img-inline {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em;
}
</style>