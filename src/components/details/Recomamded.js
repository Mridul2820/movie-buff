import React from 'react';
import { ContentList } from '../../styles/Styles';
import MovieSeries from '../cards/MovieSeries';

const Recommended = ({ recommended }) => {
  return (
    <section className="tab-section">
      <h2 className="detail-tab-title">More Like This</h2>
      <ContentList>
        {recommended.slice(0, 12).map((recom) => (
          <MovieSeries
            key={recom.id}
            id={recom.id}
            poster={recom.backdrop_path}
            title={recom.title || recom.name}
            date={recom.release_date || recom.first_air_date}
            media_type={recom.media_type}
            vote_average={recom.vote_average}
            description={recom.overview}
            recommended
          />
        ))}
      </ContentList>
    </section>
  );
};

export default Recommended;
