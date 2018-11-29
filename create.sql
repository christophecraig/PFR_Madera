create database if not exists madera;
use madera;
create table if not exists insulations (
  id int not null AUTO_INCREMENT primary key,
  name varchar(50) 
);
create table if not exists covers (
  id int not null AUTO_INCREMENT primary key,
  name varchar(50) 
);
create table if not exists wood_frames (
  id int not null AUTO_INCREMENT primary key,
  name varchar(50)
);
create table if not exists frames (
  id int not null AUTO_INCREMENT primary key,
  name varchar(50) 
);
create table if not exists technical_clauses (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists natures (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists cuts (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists units (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists states (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists ranks (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255) 
);

create table if not exists components_types (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255)
);

create table if not exists components_type_per_component (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255)
);

create table if not exists clients (
  id int NOT NULL AUTO_INCREMENT primary key,
  ref VARCHAR(255),
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  address VARCHAR(255)
);

create table if not exists providers (
  id int NOT NULL AUTO_INCREMENT primary key,
  businessName VARCHAR(255),
  address VARCHAR(255),
  businessContact VARCHAR(255),
  payementContact VARCHAR(255),
  description VARCHAR(511)
);

create table if not exists specs (
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(255),
  `value` varchar(255)
);

create table if not exists settings(
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(255),
  `value` varchar(255)
);

create table if not exists users(
  id int NOT NULL AUTO_INCREMENT primary key,
  email VARCHAR(255),
  password VARCHAR(255),
  salt VARCHAR(255),
  lastName VARCHAR(255),
  firstName VARCHAR(255),
  login VARCHAR(255),
  active tinyint(1),
  id_ranks int(11),
  foreign key (id_ranks) references ranks(id)
);

create table if not exists quotes(
  id int NOT NULL AUTO_INCREMENT primary key,
  ref VARCHAR(255),
  name VARCHAR(255),
  `date` date,
  id_states int(11),
  foreign key (id_states) references states(id)
);	

create table if not exists quotes_per_client_by_user (
  id_clients int(11),
  id_quotes int(11),
  id_users int(11),
  primary key(id_clients, id_quotes, id_users)
);

create table if not exists modules (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255),
  id_natures int (11),
  FOREIGN key (id_natures) REFERENCES natures(id)
);

create table if not exists cut_per_module (
  id_modules int(11),
  id_cut int(11),
  foreign key (id_modules) references modules(id),
  foreign key (id_cut) references cuts(id),
  primary key(id_modules, id_cut)
);

create table if not exists ranges (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255),
  id_frames int (11),
  id_insulations int (11),
  id_covers int (11),
  id_wood_frames int (11),
  foreign key (id_frames) references frames(id),
  foreign key (id_insulations) references insulations(id),
  foreign key (id_covers) references covers(id),
  foreign key (id_wood_frames) references wood_frames(id)
);

create table if not exists models (
  id int not null AUTO_INCREMENT primary key,
  name varchar(255),
  id_ranges int(11),
  FOREIGN KEY (id_ranges) REFERENCES ranges(id)
);

create table if not exists components (
  id int(11) not null AUTO_INCREMENT primary key,
  name varchar(500),
  id_units int(11),
  id_natures int(11),
  FOREIGN key (id_units) REFERENCES units(id),
  FOREIGN key (id_natures) REFERENCES natures(id)
);

create table if not exists modules_per_model (
  id_modules int (11),
  id_models int (11),
  FOREIGN KEY (id_modules) REFERENCES modules(id),
  FOREIGN KEY (id_models) REFERENCES models(id),
  primary key(id_modules, id_models)
);

create table if not exists modules_per_range_per_quote (
  id_ranges int(11),
  id_modules int(11),
  id_quotes int(11),
  foreign key (id_modules) references modules(id),
  foreign key (id_ranges) references ranges(id),
  foreign key (id_quotes) references quotes(id),
  primary key (id_ranges, id_modules, id_quotes)
);

create table if not exists technical_clauses_per_component (
  id_components int(11),
  id_technical_clauses int(11),
  foreign key (id_components) references components(id),
  foreign key (id_technical_clauses) references technical_clauses(id),
  primary key (id_components, id_technical_clauses)
);

create table if not exists specs_per_component (
  id_specs int(11),
  id_components int(11),
  FOREIGN key (id_specs) REFERENCES specs(id),
  FOREIGN key (id_components) REFERENCES components(id),
  primary key (id_specs, id_components)
);

create table if not exists components_per_provider (
  id_components int(11),
  id_providers int(11),
  foreign key (id_components) references components(id),
  foreign key (id_providers) references providers(id)
);