import React, { useState, useEffect } from 'react';

import { filterQuestions } from '../../Services/services';

import rightArrow from '../../assets/DropdownArrow.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function FAQ() {
	const [filteredQuestions, setFilteredQuestions] = useState(null);

	useEffect(() => {
		let typeQuestion = 'question0';
		setFilteredQuestions(filterQuestions(typeQuestion));
	}, []);

	function handleQuestion(e) {
		let typeQuestion = e.target.value;
		if (typeQuestion === 'question0') {
			setFilteredQuestions(filterQuestions(typeQuestion));
		} else if (typeQuestion === 'question1') {
			setFilteredQuestions(filterQuestions(typeQuestion));
		} else if (typeQuestion === 'question2') {
			setFilteredQuestions(filterQuestions(typeQuestion));
		} else if (typeQuestion === 'question3') {
			setFilteredQuestions(filterQuestions(typeQuestion));
		} else if (typeQuestion === 'question4') {
			setFilteredQuestions(filterQuestions(typeQuestion));
		}
	}

	return (
		<>
			<div className="question-container">
				<div>
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> FAQ
					</div>
				</div>
				<div className="question-landing">
					<div className="question-tabs">
						<button
							className="question-button"
							onClick={handleQuestion}
							value="question0"
						>
							How MKTFY works?
							<img src={rightArrow} alt="right-arrow" />
						</button>
						<button
							className="question-button"
							onClick={handleQuestion}
							value="question1"
						>
							How can I sell things on MKTFY?
							<img src={rightArrow} alt="right-arrow" />
						</button>
						<button
							className="question-button"
							onClick={handleQuestion}
							value="question2"
						>
							Where do the products come from?
							<img src={rightArrow} alt="right-arrow" />
						</button>
						<button
							className="question-button"
							onClick={handleQuestion}
							value="question3"
						>
							Can I have a refund?
							<img src={rightArrow} alt="right-arrow" />
						</button>
						<button
							className="question-button"
							onClick={handleQuestion}
							value="question4"
						>
							Where is MKTFY based?
							<img src={rightArrow} alt="right-arrow" />
						</button>
					</div>

					<div className="all-questions">
						{filteredQuestions &&
							filteredQuestions.map((type) => (
								<div key={type.id}>
									<div>
										<h1 style={{ fontSize: '40px', color: '#6318af' }}>
											{type.title}
										</h1>
										<div className="answers">{type.content}</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
}
