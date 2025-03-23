package mun.portfolio.controller;


import lombok.RequiredArgsConstructor;
import mun.portfolio.domain.Comment;
import mun.portfolio.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public Comment postComment(@RequestBody Comment comment) {
        return commentService.save(comment);
    }

    @GetMapping
    public List<Comment> getComments() {
        return commentService.findAll();
    }
}
