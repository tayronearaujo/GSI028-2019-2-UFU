Create table usuario(  

    user_id int NOT NULL AUTO_INCREMENT,
    name_user varchar(255),
    email varchar(255),
    password_user varchar(50),

 primary key (user_id)
)

select * from usuario

insert into usuario (user_id, name_user, email, password_user)
 values (1, "Tayrone","teste@hotmail.com", "123454")