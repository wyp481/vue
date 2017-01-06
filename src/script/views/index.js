var Vue = require("../lib/vue.js");
var Swiper = require("../lib/swiper.js");

new Vue({
	el:'#m-index',
	data:{
		swiper:null,
		list: []
	},
	
//	methods:{
//		changeTab: function() {
//			console.log(0)
//		}
//	},
	mounted: function () {		
				new Swiper ('.swiper-container',{ 
				    loop: true,
				    autoplay:1000,
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				    })
				
		fetch("/api/list")
		.then(response => response.json())
		.then(res => {	
			var that = this;
			that.list = res
		})
		.catch(e => console.log("Oops,error",e));		
	}	
	
})


