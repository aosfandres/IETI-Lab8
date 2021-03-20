package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Task;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;


@Service
public class TaskServiceImpl implements TaskService {

    private List<Task> tasks = new ArrayList<>();

    public TaskServiceImpl() {
    }


    @PostConstruct
    private void populateSampleData() {
        tasks.add(new Task("tarea 1", "Andres Sotelo", "In Progress", "2345234523452345"));
        tasks.add(new Task("tarea 2", "Andres Sotelo", "Ready", "2345234523452345"));
        tasks.add(new Task("tarea 3", "Andres Sotelo", "Completed", "2345234523452345"));
    }


    @Override
    public List<Task> getTasks() {
        return tasks;
    }


}