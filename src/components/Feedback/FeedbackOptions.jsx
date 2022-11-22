import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { Wrapper, Btn } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <Wrapper>
        {options.map(type => {
          return (
            <Btn
              key={type}
              className={type}
              onClick={() => onLeaveFeedback(type)}
            >
              {type}
            </Btn>
          );
        })}
      </Wrapper>
    </Section>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
