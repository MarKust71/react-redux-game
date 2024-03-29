import './PageIndicator.css';
import React from 'react';
import { PageIndicatorItem } from './pageIndicatorItem/PageIndicatorItem';
import { PageIndicatorProps } from './PageIndicator.types';
import { useDispatch, useSelector } from 'react-redux';
import { GameState } from 'reducers/game/gameReducer.types';
import { chosePage } from 'actions/game/gameActions';

export const PageIndicator: React.FC<PageIndicatorProps> = () => {
  const activePage = useSelector<GameState, GameState['activePage']>((state) => state.activePage);
  const numberOfPages = useSelector<GameState, GameState['numberOfPages']>((state) => state.numberOfPages);
  const dispatch = useDispatch();

  const pages = new Array(numberOfPages);
  pages.fill(false);

  return (
    <div className="page-indicator">
      <div className="page-indicator-grid">
        {pages.map((isActive, index) => {
          return (
            <div key={`key-${index}`}>
              <PageIndicatorItem active={activePage === index + 1} onClick={() => dispatch(chosePage(index + 1))} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
