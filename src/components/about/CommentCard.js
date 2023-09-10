import React, { useState } from 'react'



const CommentCard = (props) => {
  return (
	<>

	
		<div className="card-bg">
			<div className="upper">
				<img src={require("../../files/" + props.imageSource)}  alt='' />
			</div>
			<div className="lower">
				<div className="name-text">
					{props.clientName}
				</div>
				<p>{props.commentText}</p>
				<div className="date-time">
					{props.dateTime}
				</div>			
			</div>

		</div>
	</>
  )
}

export default CommentCard