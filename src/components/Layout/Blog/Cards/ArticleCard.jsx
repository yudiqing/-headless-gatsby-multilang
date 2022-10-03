import { useFormattedDate } from '../../../../hooks/useFormattedDate';

import {
  artDirectedCardImgs,
  CardImg,
  CardImgContainer,
  CardLink,
  CategoryBox,
  ContentWrapper,
  Date,
  Excerpt,
  PostTitle,
} from './styles';

export const ArticleCard = ({
  recordId,
  date,
  title,
  excerpt,
  category,
  cardImg,
  cardImgMobile,
  altImg,
}) => {
  const images = artDirectedCardImgs(cardImg, cardImgMobile);

  const { formattedDate } = useFormattedDate(date);

  return (
    <article>
      <CardLink recordId={recordId}>
        <CardImgContainer>
          <CardImg objectFit="cover" image={images} alt={altImg || ''} />
        </CardImgContainer>
        <ContentWrapper>
          {category && <CategoryBox>{category.title}</CategoryBox>}
          <Date>{formattedDate}</Date>
          <PostTitle>{title}</PostTitle>
          <Excerpt>{excerpt}</Excerpt>
        </ContentWrapper>
      </CardLink>
    </article>
  );
};
