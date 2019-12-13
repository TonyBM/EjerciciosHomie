
Zammad.Handlers.Homes.HomesCalendarHandler = {
	hasBeenShow: false,
	init: function(){
	  this.initEvents();
	},
  
	initEvents: function(){
	  var that = this;
	  this.setDaysHoverEvent();
	  this.setDaysClickEvent();
	  this.setTimesHoverEvent();
	  this.setTimesClickEvent();
	  this.setBlockButtonEvent();
	  this.setDesBlockButtonEvent();
	  this.setTimeEvents();
	  this.closeMagnificButton();
  
	  $('.js-check-if-is-blocked[value="true"]').parent().addClass('selected');
	},
	setDaysHoverEvent: function () {
	  $('.js-day-button').hover(function() {
		var $btn = $(this);
		var index = $btn.data('id');
		$('.js-times-container[data-day="'+index+'"] .time-calendar').addClass('active');
		$btn.addClass('active');
	  }, function () {
		var $btn = $(this);
		var index = $btn.data('id');
		$('.js-times-container[data-day="'+index+'"] .time-calendar').removeClass('active');
		$btn.removeClass('active');
	  });
	},
	setDaysClickEvent: function () {
	  $('.js-day-button').on('click', function () {
		  var $btn = $(this);
		  var index = $btn.data('id');
  
		  if ($btn.hasClass('is-blocked')) {
			  $('.js-times-container[data-day="'+index+'"] .time-calendar').removeClass('selected');
			  $btn.removeClass('is-blocked');
			  $('.js-times-container[data-day='+index+'] .js-change-block').prop('checked', false);
			  $('.js-times-container[data-day='+index+'] .js-change-time').prop('checked', false);
		  }else {
			  $('.js-times-container[data-day="'+index+'"] .time-calendar').addClass('selected');
			  $btn.addClass('is-blocked');
			  $('.js-times-container[data-day='+index+'] .js-change-block').prop('checked', true);
			  $('.js-times-container[data-day='+index+'] .js-change-time').prop('checked', true);
		  }
	  });
	},
	setTimesHoverEvent: function () {
	  $('.js-times-button').hover(function() {
		var $btn = $(this);
		var index = $btn.data('time');
		$('.js-time-button[data-time="'+index+'"]').addClass('active');
		$btn.addClass('active');
	  },  () => {
		var $btn = $(this);
		var index = $btn.data('time');
		$('.js-time-button[data-time="'+index+'"]').removeClass('active');
		$btn.removeClass('active');
	  });
	},
	setTimesClickEvent: function () {
	  $('.js-times-button').on('click', function () {
		  let $btn = $(this);
		  let index = $btn.data('time');
      let btnIsblocked = $btn.hasClass('is-blocked');

      $(`.js-time-button[data-time="$(index)"]`).toggleClass('selected');
      $(`.js-time-button[data-time="$(index)"] .js-change-time`).prop('checked', !btnIsblocked);
      $btn.toggleClass('is-blocked');
	  });
	},
	//de aqui
	setBlockButtonEvent:  () => {
	  $('.js-block-btn').on('click', () => {
		let $btn = $(this);
    let id = $btn.data('day');
    
    $(`.js-day-button[data-id=$(id)]`).removeClass('active');
    $(`.js-day-button[data-id=$(id)]`).addClass('blocked');
		$btn.hide();
	  $('.js-desblock-btn').show();
		$(`.js-times-container[data-day=$(id)] .js-change-time`).each( (ii, checkBox) => {
		  $(checkBox).prop('checked', true);
		  $(checkBox).parent().addClass('selected');
		});
		$(`.js-times-container[data-day=$(id)] .js-change-block`).prop('checked', true);
		if ($('.js-day-button.complete, .js-day-button.blocked').length == 7) { $('.js-finish-btn').show()}
	  });
	},
	setDesBlockButtonEvent: () => {
	  $('.js-desblock-btn').on('click', () => {
		  let $btn = $(this);
      let id = $btn.data('day');
      
		  $(`.js-day-button[data-id=$(id)]`).addClass('active');
		  $(`.js-day-button[data-id=$(id)]`).removeClass('blocked');
		  $btn.hide();
		  $('.js-block-btn').show();
		  $(`.js-times-container[data-day=$(id)] .js-change-time`).each((ii, checkBox) => {
			  $(check_box).prop('checked', false);
			  $(check_box).parent().removeClass('selected');
		  });
		  $(`'.js-times-container[data-day=$(id)] .js-change-block'`).prop('checked', false);
	  })
	},
	setFinishButtonEvent:  () => {
	  $('.js-finish-btn').on('click', () => {
		  let $btn = $(this);
      let id = $btn.data('day');
      
		  $.magnificPopup.open({
			  items: {
				src: '#calendar-finish-modal',
				type: 'inline',
				midClick: true,
			  }
		  });
	  })
	},
	setTimeEvents: () => {
    var self = this;
    
	  $('.js-change-time').change( () => {
		  var $checkbox = $(this);
		  var time = $checkbox.parent().data('time');
		  var day = $checkbox.parent().parent().data('day');
		  if ($checkbox.is(':checked')) {
			$checkbox.parent().addClass('selected');
		  }else {
			$checkbox.parent().removeClass('selected');
		  }
		  self.verifyDaysAndTimesMarks(day, time);
	  });
	},
	//a aqui
	showPopupHelper: function () {
	  if (!this.hasBeenShow) {
		  $.magnificPopup.open({
			items: {
			  src: '#calendar-help-popup',
			  type: 'inline'
			}
		  });
		  this.hasBeenShow = true;
	  }
	},
	markAsActiveTheNextUnCompletedDay: function (){
	  var uncompleted_days  = $('.js-day-button:not(.complete)')
	  if (uncompleted_days.length > 0) {
		$(uncompleted_days[0]).click();
		// $(uncompleted_days[0]).addClass('active');
	  }
	},
	verifyDaysAndTimesMarks: function(day, time) {
	  var total = $('.js-times-container[data-day="'+day+'"] .time-calendar').length
	  var selected_total = $('.js-times-container[data-day="'+day+'"] .time-calendar.selected').length
	  if (selected_total == total) {
		$('.js-day-button[data-id="'+day+'"]').addClass('is-blocked');
	  }else {
		$('.js-day-button[data-id="'+day+'"]').removeClass('is-blocked');
		$('.js-times-container[data-day='+day+'] .js-change-block').prop('checked', false);
	  }
  
	  var total = $('.js-time-button[data-time="'+time+'"]').length
	  var selected_total = $('.js-time-button[data-time="'+time+'"].selected').length
	  if (selected_total == total) {
		$('.js-times-button[data-time="'+time+'"]').addClass('is-blocked');
	  }else {
		$('.js-times-button[data-time="'+time+'"]').removeClass('is-blocked');
	  }
	},
	closeMagnificButton: function () {
	  $('.js-close-popup').click(function () {
		$('.js-text-change').removeClass('white');
		$('.js-text-change').parent().parent().css('z-index', 1);
		$.magnificPopup.close();
	  });
	},
	initSlider: function () {
	  var owl = $('#owl-carousel-calendar');
	  setTimeout(function () {
		owl.trigger('destroy.owl.carousel');
		if($(window).width() < 768){
		}else {
		  owl.removeClass('owl-carousel');
		}
	  }, 1000);
	},
  };