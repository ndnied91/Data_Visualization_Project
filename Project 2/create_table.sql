

create table test_table(
  mid int not null auto_increment,

  cid int(11) NOT NULL,
  sid  int(11) NOT NULL,
  code varchar(50) NOT NULL UNIQUE,
  mydatetime TimeStamp NOT NULL,
  note varchar(255),

  primary key(mid),
  foreign key (cid) REFERENCES datamining.DV_User(uid),
  -- foreign key (sid) REFERENCES CPS3740.Sources(id)
);



create table test_table(
  mid int not null,
  cid int(11) NOT NULL
);






create table Money_niedzwid(
  mid int not null auto_increment,

  cid int(11) NOT NULL,
  sid  int(11) NOT NULL,
  code varchar(50) NOT NULL UNIQUE,
  type varchar(1) NOT NULL ,
  amount float(10) NOT NULL ,
  mydatetime TimeStamp NOT NULL,
  note varchar(255),

  primary key(mid),
  foreign key (cid) REFERENCES CPS3740.Customers(id),
  foreign key (sid) REFERENCES CPS3740.Sources(id)
);










create table p2_data(
  login varchar(20) NOT NULL,
  id int not null,
  avg int(11) NOT NULL,
  pop  int(11) NOT NULL,
  mydatetime TimeStamp NOT NULL,

  primary key(login),
  foreign key (id) REFERENCES datamining.DV_User(uid)
);
