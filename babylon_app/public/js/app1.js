$(document).ready(function(){


	$('.ratio').width(0)
	
	
	
	// intro 
	setTimeout(function(){
		$('#r1').animate({
			opacity:1,
			width:'95%'
		},550,function(){
	
			$('#r1 span:nth-of-type(1)').animate({opacity:1},200,function(){
			$('#r1 span:nth-of-type(2)').animate({opacity:1},210,function(){
			$('#r1 span:nth-of-type(3)').animate({opacity:1},220,function(){
			$('#r1 span:nth-of-type(4)').animate({opacity:1},220,function(){
			$('#r1 span:nth-of-type(5)').animate({opacity:1},230,function(){
			$('#r1 span:nth-of-type(6)').animate({opacity:1},240,function(){
			$('#r1 span:nth-of-type(7)').animate({opacity:1},250,function(){})})})})})})})
			$('#r2 span').animate({opacity:1},500)
			$('#r2').animate({
				opacity:1,
				width:'95%'
			},550,function(){
	
				$('#r2 span').animate({opacity:1},200)
	
				$('#r3').animate({
					opacity:1,
					width:'95%'
				},550,function(){
					$('#r4').animate({
						opacity:1,
						width:'95%'
					},550,function(){
						$('#r5').animate({
							opacity:1,
							width:'95%'
						},550,function(){
							$('#r6').animate({
								opacity:1,
								width:'95%'
							},550,function(){
								$('#r7').animate({
									opacity:1,
									width:'85%'
								},550,function(){
									game()
									$('#r8').animate({
										opacity:1,
										width:'85%'
									},550,function(){
										$('#r9').animate({
											opacity:1,
											width:'82%'
										},550,function(){
											$('#r10').animate({
												opacity:1,
												width:'79%'
											},550,function(){
												$('#r11').animate({
													opacity:1,
													width:'76%'
												},550,function(){
													$('#introcontain').css("font-size", "20pt")
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
		
	},200)

})


