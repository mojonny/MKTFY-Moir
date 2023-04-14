import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { decode } from 'html-entities';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';
import rightArrow from '../../assets/DropdownArrow.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function FAQ() {
	const [faq, setFaq] = useState([]);
	const [faqIndex, setFaqIndex] = useState(0);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		async function getFAQ() {
			try {
				const token = sessionStorage.getItem('accessToken');
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/FAQ';
				const options = {
					headers: { Authorization: `Bearer ${token}` },
				};
				const response = await axios.get(url, options);
				setFaq(response.data);

				console.log('SUCCESS: Got all FAQs:', response.data);
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		}

		getFAQ();
	}, []);

	const faqQuestionsComponents = faq.map((type, index) => (
		<div key={type.id}>
			<button
				className="question-button"
				onClick={() => {
					setFaqIndex(index);
				}}
				value={type.id}
			>
				{type.question}
				<img src={rightArrow} alt="right-arrow" />
			</button>
		</div>
	));

	var faqComponents = faq.map((type) => (
		<div key={type.id}>
			<div>
				<h1 style={{ fontSize: '40px', color: '#6318af' }}>{type.question}</h1>
				<div className="answers">{parse(decode(type.answer))}</div>
			</div>
		</div>
	));

	return (
		<>
			<div className="question-container">
				<div className="breadcrumbs">
					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
					>
						Deals for you
					</button>

					<img src={breadArrow} alt="path-arrow" />
					<button style={{ border: 'none', background: 'none' }}> FAQ </button>
				</div>
				<div className="question-landing">
					<div className="question-tabs">{faqQuestionsComponents}</div>

					<div className="all-questions">{faqComponents[faqIndex]}</div>
				</div>
			</div>
		</>
	);
}
