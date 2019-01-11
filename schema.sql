USE jumpstart
DROP TABLE IF EXISTS comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY
  username VARCHAR(24)
  words VARCHAR(255) NOT NULL
  created VARCHAR(24) NOT NULL
  project_id VARCHAR(36) NOT NULL
)

INSERT INTO comments (0, 'austin', 'great job, thanks for sharing your chocolate recipe with me :)', '01/28/1998', '12345')