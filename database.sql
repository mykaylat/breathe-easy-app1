-- This table stores air quality observations. Each row represents a single observation, 
-- including the site ID, observation time (in UTC), and the air quality reading.
CREATE TABLE observations (
    ID SERIAL PRIMARY KEY,
    SiteID INT,
    ObservationTimeUTC TIMESTAMP,
    Value FLOAT
);

-- The sample data represents four observations taken at two different sites on May 1, 2024.v
INSERT INTO observations (SiteID, ObservationTimeUTC, Value) VALUES
(1, '2024-05-01 12:00:00', 25.4),
(2, '2024-05-01 12:05:00', 26.1),
(1, '2024-05-01 12:10:00', 25.8),
(2, '2024-05-01 12:15:00', 26.3);
