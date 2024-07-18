CREATE TABLE logs (
    log String
) ENGINE = MergeTree()
ORDER BY log;
