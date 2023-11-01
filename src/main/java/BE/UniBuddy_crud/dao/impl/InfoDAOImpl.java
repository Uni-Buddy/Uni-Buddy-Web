package BE.UniBuddy_crud.dao.impl;

import BE.UniBuddy_crud.dao.InfoDAO;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoDAOImpl implements InfoDAO {

    UsersRepository usersRepository;

    @Autowired
    public InfoDAOImpl(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }


    @Override
    public Users saveInfo(Users users) {
        usersRepository.save(users);
        return users;
    }
}
