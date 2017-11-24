package classes.controller;

import classes.data.detail.CustomUserDetail;
import classes.data.dto.PracticeDto;
import classes.data.entity.Student;
import classes.data.entity.User;
import classes.data.service.PracticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/head-master")
public class MyRestController {

    @Autowired
    private PracticeService practiceService;

    @RequestMapping(value = "/postPractice", method = RequestMethod.POST)
    public ResponseEntity<PracticeDto> postPractice(@RequestBody PracticeDto practiceDto) {
        System.out.println("student = > " + practiceDto.getStudentId());
        createPractice(practiceDto, getPrincipal());
        return new ResponseEntity<>(practiceDto, HttpStatus.OK);
    }

    private void createPractice(PracticeDto practiceDto, User user) {
        practiceService.registerNewPractice(practiceDto, user);
    }

    private User getPrincipal(){
        CustomUserDetail customUserDetail = (CustomUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return customUserDetail.getUser();
    }

}
