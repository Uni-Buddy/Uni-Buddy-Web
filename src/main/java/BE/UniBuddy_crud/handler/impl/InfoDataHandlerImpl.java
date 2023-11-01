package BE.UniBuddy_crud.handler.impl;

import BE.UniBuddy_crud.dao.InfoDAO;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.handler.InfoDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class InfoDataHandlerImpl implements InfoDataHandler {
    InfoDAO infoDAO;

    @Autowired
    public InfoDataHandlerImpl(InfoDAO infoDAO){
        this.infoDAO = infoDAO;
    }

    @Override
    public void save(Users users) {
        infoDAO.saveInfo(users);
    }

}
