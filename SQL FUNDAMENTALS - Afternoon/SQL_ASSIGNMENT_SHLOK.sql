CREATE TABLE TEAMS (
    TeamHandle varchar(3),
    TeamName varchar(255),
    MatchesPlayed int
);

INSERT INTO TEAMS (TeamHandle, TeamName, MatchesPlayed)
VALUES ('IND', 'India', 3);

INSERT INTO TEAMS (TeamHandle, TeamName, MatchesPlayed)
VALUES ('AUS', 'Australia', 3);

INSERT INTO TEAMS (TeamHandle, TeamName, MatchesPlayed)
VALUES ('ENG', 'England', 3);

INSERT INTO TEAMS (TeamHandle, TeamName, MatchesPlayed)
VALUES ('NZ', 'New Zealand', 3);

CREATE TABLE BATSMAN (
    TeamHandle varchar(3),
    TeamName varchar(255),
    BatsmanName varchar(255),
    Runs int,
	HighestScore int
);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('IND', 'India', 'Virat Kohli', 241, 148);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('IND', 'India', 'Rohit Sharma', 310, 105);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('AUS', 'Australia', 'David Warner', 304, 148);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('AUS', 'Australia', 'Steven Smith', 89, 78);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('ENG', 'England', 'Joe Root', 206, 100);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('ENG', 'England', 'Jos Butler', 290, 121);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('NZ', 'New Zealand', 'Kane Williamson', 220, 100);

INSERT INTO BATSMAN (TeamHandle, TeamName, BatsmanName, Runs, HighestScore)
VALUES ('NZ', 'New Zealand', 'Ross Taylor', 322, 121);

CREATE TABLE BALLER (
    TeamHandle varchar(3),
    TeamName varchar(255),
    BallerName varchar(255),
    Wickets int,
	MostWicketTaken int
);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('IND', 'India', 'Jasprit Bumrah', 8, 5);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('IND', 'India', 'Shami', 8, 5);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('AUS', 'Australia', 'Pat Cummins', 11, 4);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('AUS', 'Australia', 'Starc', 7, 3);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('ENG', 'England', 'Adil Rashid', 6, 2);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('ENG', 'England', 'Benn Stokes', 10, 4);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('NZ', 'New Zealand', 'Tim Southee', 6, 4);

INSERT INTO BALLER (TeamHandle, TeamName, BallerName, Wickets, MostWicketTaken)
VALUES ('NZ', 'New Zealand', 'Trent Boult', 14, 5);

CREATE TABLE MatchHistory (
    TeamHandle varchar(3),
    TeamName varchar(255),
    RunsScored int,
	Status_Won_Lose varchar(255)
);

INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('IND', 'India', 378, 'Won');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('AUS', 'Australia', 374, 'Lose');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('AUS', 'Australia', 297, 'Lose');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('NZ', 'New Zealand', 299, 'Won');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('IND', 'India', 251, 'Won');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('ENG', 'England', 191, 'Lose');

INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('NZ', 'New Zealand', 404, 'Won');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('ENG', 'England', 402, 'Lose');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('IND', 'India', 355, 'Lose');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('ENG', 'England', 361, 'Won');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('AUS', 'Australia', 221, 'Lose');
INSERT INTO MatchHistory (TeamHandle, TeamName, RunsScored, Status_Won_Lose)
VALUES ('NZ', 'New Zealand', 223, 'Won');

SELECT * FROM BATSMAN
ORDER BY Runs DESC
LIMIT 5;

SELECT * FROM BALLER
ORDER BY Wickets DESC
LIMIT 5;

SELECT
    TeamName,
    CAST(AVG(RunsScored) AS DEC(10,2))
    avg_score
FROM
    MatchHistory
GROUP BY
    TeamName;
 
DELIMITER $$

DROP PROCEDURE IF EXISTS HighestScore$$
CREATE PROCEDURE `HighestScore`(Country varchar(255))
BEGIN
SELECT MAX(RunsScored) AS MaxScore
FROM MatchHistory WHERE TeamHandle = Country;
END$$

DELIMITER ;
CALL HighestScore('IND');

DROP TABLE IF EXISTS MinAvgScore;
CREATE TABLE MinAvgScore (
    TeamName varchar(255),
    AvgScore float
);
INSERT INTO MinAvgScore
SELECT
    TeamName,
    CAST(AVG(RunsScored) AS DEC(10,2))
    avg_score
FROM
    MatchHistory
GROUP BY
    TeamName 
order by
	avg_score
LIMIT 1;

UPDATE BATSMAN AS b
INNER JOIN MinAvgScore AS g ON b.TeamName = g.TeamName
SET b.Runs= b.Runs+10
WHERE b.TeamName = g.TeamName;






