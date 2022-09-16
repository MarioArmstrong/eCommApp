SELECT *
FROM Product
JOIN Category
ON Product.category_id = Category.id;

SELECT *
FROM ProductTag
JOIN Product
ON ProductTag.product_id = Product.id;

SELECT *
FROM ProductTag
JOIN Tag
ON ProductTag.tag_id = Tag.id;