BEGIN TRANSACTION;
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit','MEMO',1,'2023-05-01',90,1685600533801);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,2,'2023-05-02',10,1685600533802);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,3,'2023-05-03',20,1685600533803);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit',NULL,4,'2023-05-04',44,1685600533804);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,5,'2023-05-05',33,1685600533805);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,6,'2023-05-06',-10,1685600533806);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit',NULL,1,'2023-05-07',-10,1685600533807);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,2,'2023-05-08',43,1685600533808);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'tripet',NULL,3,'2023-05-09',38,1685600533809);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit',NULL,4,'2023-05-10',67,1685600533810);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit',NULL,5,'2023-05-11',80,1685600533811);
INSERT INTO test_din_history ("user_name","gender","birth","patient","direction","volume_level","scoring","memo","sound_set","test_date","test_result","reg_timestamp") VALUES ('bong','M','1980-01-01',12345678,'LR',0,'digit',NULL,6,'2023-05-12',120,1685600533812);
COMMIT;
