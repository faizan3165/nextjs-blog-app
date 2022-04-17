import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
	const [ comments, setComments ] = useState([]);

	useEffect(() => {
		getComments(slug).then((result) => setComments(result));
	}, []);

	return (
		<React.Fragment>
			{comments.length > 0 && (
				<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">{ comments.length == 1 ? ( `${comments.length} comment` ) : (`${comments.length} comments`) }</h3>

					{comments.map((comment) => (
						<div className="border-b border-gray-100 mb-4 pb-4" key={comment.createdAt}>
							<p className="mb-4">
								<span className="font-semibold">{comment.name}</span> at{' '}
								{moment(comment.createdAt).format('hh:mm')} on{' '}
								{moment(comment.createdAt).format('MMM DD, YYYY')}
							</p>

							<p className="whitespace pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
						</div>
					))}
				</div>
			)}
		</React.Fragment>
	);
};

export default Comments;
