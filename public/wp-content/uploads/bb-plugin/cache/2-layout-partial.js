
jQuery(function($){$(function(){$('.fl-node-5b8d26f075d9b .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-5c4df10720270 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-5b8e1c1611f1b .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});var POST_EXPANDED=false;function toggleFullPost(e){e.preventDefault();var readMoreBtn=document.querySelector('#read-more-btn > a > span');var fadeoutDiv=document.querySelector('#featured-post-wrapper > .fadeout');if(POST_EXPANDED){readMoreBtn.textContent="Read More"
fadeoutDiv.style.display="block";document.getElementById('featured-post-content').style.height='400px';document.getElementById('featured-post-content').style.maxHeight='400px';POST_EXPANDED=false;document.getElementById('featured-post-container').scrollIntoView({behavior:'smooth',block:'start'});}else{readMoreBtn.textContent="Show Less"
fadeoutDiv.style.display="none";document.getElementById('featured-post-content').style.height='auto';document.getElementById('featured-post-content').style.maxHeight='5001px';POST_EXPANDED=true;}}
(function($){FLBuilderPostCarousel=function(settings){this.settings=settings.settings;this.transitionType=settings.transition;this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .fl-post-carousel-wrapper';this.postClass=this.nodeClass+' .fl-post-carousel-post';this.prevCarouselBtn=$(this.nodeClass+' .carousel-prev');this.nextCarouselBtn=$(this.nodeClass+' .carousel-next');this.layout=settings.layout;this.navigation=settings.navigationControls;this.slideWidth=settings.slideWidth;this.currentBrowserWidth=$(window).width();if(this._hasPosts()){this._initCarousel();}};FLBuilderPostCarousel.prototype={settings:{},nodeClass:'',wrapperClass:'',postClass:'',prevCarouselBtn:'',nextCarouselBtn:'',layout:'',navigation:false,slideWidth:0,carousel:'',_hasPosts:function(){return $(this.postClass).length>0;},_resizeDebounce:function(){clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(function(){this._reloadCarousel();}.bind(this),250);},_getSlidesNumber:function(){var $wrapperWidth=this._getWrapperWidth(),$slideWidth=$(this.postClass).width(),columns=Math.ceil($wrapperWidth/this.slideWidth);return columns;},_getSlideWidth:function(){return Math.ceil((this._getWrapperWidth()-(this.settings.slideMargin*(this._getSlidesNumber()-1)))/this._getSlidesNumber());},_getWrapperWidth:function()
{var $wrapper=$(this.nodeClass+' .fl-post-carousel');$width=$wrapper.width();if($width===0&&$wrapper.is(':hidden')){$clone=$wrapper.clone().css("visibility","hidden").appendTo($('.fl-row-content'));$width=$clone.outerWidth();$clone.remove();}
return $width;},_getSettings:function(){var newSettings,settings={slideWidth:this._getSlideWidth(),minSlides:this._getSlidesNumber(),maxSlides:this._getSlidesNumber(),onSliderLoad:function(){$(this.wrapperClass).addClass('fl-post-carousel-loaded');}.bind(this),}
newSettings=$.extend({},this.settings,settings);return newSettings;},_initCarousel:function(){this.carousel=$(this.wrapperClass).bxSlider(this._getSettings());if(this.navigation){this.prevCarouselBtn.on('click',function(e){e.preventDefault();this.carousel.goToPrevSlide();}.bind(this));this.nextCarouselBtn.on('click',function(e){e.preventDefault();this.carousel.goToNextSlide();}.bind(this));}},_reloadCarousel:function(){var bxObject=this.carousel.data('bxSlider');console.log('resizing')
if(bxObject){bxObject.reloadSlider(this._getSettings());}
else{this.carousel.reloadSlider(this._getSettings());}},};})(jQuery);(function($){$(function(){new FLBuilderPostCarousel({id:'5c6fa8fd482d0',layout:'grid',navigationControls:true,settings:{auto:true,pause:5000,speed:1000,autoDirection:'next',infiniteLoop:true,adaptiveHeight:true,controls:false,autoHover:true,slideMargin:30,moveSlides:1,onSlideBefore:function(ele,oldIndex,newIndex){$('.fl-node-5c6fa8fd482d0 .fl-post-carousel-navigation a').addClass('disabled');$('.fl-node-5c6fa8fd482d0 .bx-controls .bx-pager-link').addClass('disabled');},onSlideAfter:function(ele,oldIndex,newIndex){$('.fl-node-5c6fa8fd482d0 .fl-post-carousel-navigation a').removeClass('disabled');$('.fl-node-5c6fa8fd482d0 .bx-controls .bx-pager-link').removeClass('disabled');}}});});})(jQuery);(function($){FLBuilderPostGrid=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this.matchHeight=settings.matchHeight;if('columns'==this.settings.layout){this.wrapperClass=this.nodeClass+' .fl-post-grid';this.postClass=this.nodeClass+' .fl-post-column';}
else{this.wrapperClass=this.nodeClass+' .fl-post-'+this.settings.layout;this.postClass=this.wrapperClass+'-post';}
if(this._hasPosts()){this._initLayout();this._initInfiniteScroll();}};FLBuilderPostGrid.prototype={settings:{},nodeClass:'',wrapperClass:'',postClass:'',gallery:null,currPage:1,totalPages:1,_hasPosts:function()
{return $(this.postClass).length>0;},_initLayout:function()
{switch(this.settings.layout){case'columns':this._columnsLayout();break;case'grid':this._gridLayout();break;case'gallery':this._galleryLayout();break;}
$(this.postClass).css('visibility','visible');FLBuilderLayout._scrollToElement($(this.nodeClass+' .fl-paged-scroll-to'));},_columnsLayout:function()
{$(this.wrapperClass).imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();},this));$(window).on('resize',$.proxy(this._gridLayoutMatchHeight,this));},_gridLayout:function()
{var wrap=$(this.wrapperClass);wrap.masonry({columnWidth:this.nodeClass+' .fl-post-grid-sizer',gutter:parseInt(this.settings.postSpacing),isFitWidth:true,itemSelector:this.postClass,transitionDuration:0,isRTL:this.settings.isRTL});wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();wrap.masonry();},this));},_gridLayoutMatchHeight:function()
{var highestBox=0;if(0===this.matchHeight){return;}
$(this.nodeClass+' .fl-post-grid-post').css('height','').each(function(){if($(this).height()>highestBox){highestBox=$(this).height();}});$(this.nodeClass+' .fl-post-grid-post').height(highestBox);},_galleryLayout:function()
{this.gallery=new FLBuilderGalleryGrid({'wrapSelector':this.wrapperClass,'itemSelector':'.fl-post-gallery-post','isRTL':this.settings.isRTL});},_initInfiniteScroll:function()
{var isScroll='scroll'==this.settings.pagination||'load_more'==this.settings.pagination,pages=$(this.nodeClass+' .fl-builder-pagination').find('li .page-numbers:not(.next)');if(pages.length>1){total=pages.last().text().replace(/\D/g,'')
this.totalPages=parseInt(total);}
if(isScroll&&this.totalPages>1&&'undefined'===typeof FLBuilder){this._infiniteScroll();if('load_more'==this.settings.pagination){this._infiniteScrollLoadMore();}}},_infiniteScroll:function(settings)
{var path=$(this.nodeClass+' .fl-builder-pagination a.next').attr('href'),pagePattern=/(.*?(\/|\&|\?)paged-[0-9]{1,}(\/|=))([0-9]{1,})+(.*)/,wpPattern=/^(.*?\/?page\/?)(?:\d+)(.*?$)/,pageMatched=null,scrollData={navSelector:this.nodeClass+' .fl-builder-pagination',nextSelector:this.nodeClass+' .fl-builder-pagination a.next',itemSelector:this.postClass,prefill:true,bufferPx:200,loading:{msgText:'Loading',finishedMsg:'',img:FLBuilderLayoutConfig.paths.pluginUrl+'img/ajax-loader-grey.gif',speed:1}};if(pagePattern.test(path)){scrollData.path=function(currPage){pageMatched=path.match(pagePattern);path=pageMatched[1]+currPage+pageMatched[5];return path;}}
else if(wpPattern.test(path)){scrollData.path=path.match(wpPattern).slice(1);}
$(this.wrapperClass).infinitescroll(scrollData,$.proxy(this._infiniteScrollComplete,this));setTimeout(function(){$(window).trigger('resize');},100);},_infiniteScrollComplete:function(elements)
{var wrap=$(this.wrapperClass);elements=$(elements);if(this.settings.layout=='columns'){wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();elements.css('visibility','visible');},this));}
else if(this.settings.layout=='grid'){wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();wrap.masonry('appended',elements);elements.css('visibility','visible');},this));}
else if(this.settings.layout=='gallery'){this.gallery.resize();elements.css('visibility','visible');}
if('load_more'==this.settings.pagination){$('#infscr-loading').appendTo(this.wrapperClass);}
this.currPage++;this._removeLoadMoreButton();},_infiniteScrollLoadMore:function()
{var wrap=$(this.wrapperClass);$(window).unbind('.infscr');$(this.nodeClass+' .fl-builder-pagination-load-more .fl-button').on('click',function(){wrap.infinitescroll('retrieve');return false;});},_removeLoadMoreButton:function()
{if('load_more'==this.settings.pagination&&this.totalPages==this.currPage){$(this.nodeClass+' .fl-builder-pagination-load-more').remove();}}};})(jQuery);(function($){$(function(){new FLBuilderPostGrid({id:'5b8e3713a795f',layout:'columns',pagination:'none',postSpacing:'60',postWidth:'300',matchHeight:0,isRTL:false});});})(jQuery);(function($){$(function(){new FLBuilderPostGrid({id:'5b8e5ad87b3e9',layout:'columns',pagination:'none',postSpacing:'60',postWidth:'300',matchHeight:0,isRTL:false});});})(jQuery);(function($){$(function(){$('.fl-embed-video').fitVids();if($('.fl-module-video .fl-wp-video video').length>1){$('.fl-module-video .fl-wp-video video').mediaelementplayer({pauseOtherPlayers:false});}});})(jQuery);(function($){window.onLoadFLReCaptcha=function(){var reCaptchaFields=$('.fl-grecaptcha'),widgetID;if(reCaptchaFields.length>0){reCaptchaFields.each(function(i){var self=$(this),attrWidget=self.attr('data-widgetid'),newID=$(this).attr('id')+'-'+i;if((typeof attrWidget!==typeof undefined&&attrWidget!==false)){return;}
else{self.attr('id',newID);widgetID=grecaptcha.render(newID,{sitekey:self.data('sitekey'),theme:self.data('theme'),size:self.data('validate'),callback:function(response){if(response!=''){self.attr('data-fl-grecaptcha-response',response);if('invisible'==self.data('validate')){self.closest('.fl-contact-form').find('a.fl-button').trigger('click');}}}});self.attr('data-widgetid',widgetID);}});}};FLBuilderContactForm=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this._init();};FLBuilderContactForm.prototype={settings:{},nodeClass:'',_init:function()
{$(this.nodeClass+' .fl-button').click($.proxy(this._submit,this));},_submit:function(e)
{var theForm=$(this.nodeClass+' .fl-contact-form'),submit=$(this.nodeClass+' .fl-button'),name=$(this.nodeClass+' .fl-name input'),email=$(this.nodeClass+' .fl-email input'),phone=$(this.nodeClass+' .fl-phone input'),subject=$(this.nodeClass+' .fl-subject input'),message=$(this.nodeClass+' .fl-message textarea'),termsCheckbox=$(this.nodeClass+' .fl-terms-checkbox input'),reCaptchaField=$(this.nodeClass+' .fl-grecaptcha'),reCaptchaValue=reCaptchaField.data('fl-grecaptcha-response'),ajaxData=null,ajaxurl=FLBuilderLayoutConfig.paths.wpAjaxUrl,email_regex=/\S+@\S+\.\S+/,isValid=true,postId=theForm.closest('.fl-builder-content').data('post-id'),layoutId=theForm.find('input[name=fl-layout-id]').val(),templateId=theForm.data('template-id'),templateNodeId=theForm.data('template-node-id'),nodeId=theForm.closest('.fl-module').data('node');e.preventDefault();if(submit.hasClass('fl-disabled')){return;}
if(name.length){if(name.val()===''){isValid=false;name.parent().addClass('fl-error');}
else if(name.parent().hasClass('fl-error')){name.parent().removeClass('fl-error');}}
if(email.length){if(email.val()===''||!email_regex.test(email.val())){isValid=false;email.parent().addClass('fl-error');}
else if(email.parent().hasClass('fl-error')){email.parent().removeClass('fl-error');}}
if(subject.length){if(subject.val()===''){isValid=false;subject.parent().addClass('fl-error');}
else if(subject.parent().hasClass('fl-error')){subject.parent().removeClass('fl-error');}}
if(phone.length){if(phone.val()===''){isValid=false;phone.parent().addClass('fl-error');}
else if(phone.parent().hasClass('fl-error')){phone.parent().removeClass('fl-error');}}
if(message.val()===''){isValid=false;message.parent().addClass('fl-error');}
else if(message.parent().hasClass('fl-error')){message.parent().removeClass('fl-error');}
if(termsCheckbox.length){if(!termsCheckbox.is(':checked')){isValid=false;termsCheckbox.closest('.fl-terms-checkbox').addClass('fl-error');}
else if(termsCheckbox.parent().hasClass('fl-error')){termsCheckbox.parent().removeClass('fl-error');}}
if(reCaptchaField.length>0&&isValid){if('undefined'===typeof reCaptchaValue||reCaptchaValue===false){if('normal'==reCaptchaField.data('validate')){reCaptchaField.parent().addClass('fl-error');}else if('invisible'==reCaptchaField.data('validate')){grecaptcha.execute(reCaptchaField.data('widgetid'));}
isValid=false;}else{reCaptchaField.parent().removeClass('fl-error');}}
if(!isValid){return false;}
else{submit.addClass('fl-disabled');ajaxData={action:'fl_builder_email',name:name.val(),subject:subject.val(),email:email.val(),phone:phone.val(),message:message.val(),terms_checked:termsCheckbox.is(':checked')?'1':'0',post_id:postId,layout_id:layoutId,template_id:templateId,template_node_id:templateNodeId,node_id:nodeId}
if(reCaptchaValue){ajaxData.recaptcha_response=reCaptchaValue;}
$.post(ajaxurl,ajaxData,$.proxy(this._submitComplete,this));}},_submitComplete:function(response)
{var urlField=$(this.nodeClass+' .fl-success-url'),noMessage=$(this.nodeClass+' .fl-success-none');if(typeof response.error!=='undefined'&&response.error===false){$(this.nodeClass+' .fl-send-error').fadeOut();if(urlField.length>0){window.location.href=urlField.val();}
else if(noMessage.length>0){noMessage.fadeIn();}
else{$(this.nodeClass+' .fl-contact-form').hide();$(this.nodeClass+' .fl-success-msg').fadeIn();}}
else{$(this.nodeClass+' .fl-button').removeClass('fl-disabled');if(typeof response.message!=='undefined'){$(this.nodeClass+' .fl-send-error').html(response.message);}
$(this.nodeClass+' .fl-send-error').fadeIn();return false;}}};})(jQuery);(function($){$(function(){new FLBuilderContactForm({id:'5b8f7f6cd13c8'});});})(jQuery);