@extends('layouts.admin')

@section('title', 'Публикации')

@section('sidebar')
    @parent

    <nav>
        <ul>
            <li>
                <a href="/admin/posts">
                    Публикации
                </a>
            </li>
            <li>
                <a href="/admin/posts?status=draft">
                    Черновики
                </a>
            </li>
        </ul>
    </nav>
@endsection

@section('content')

    <div class="container">
        <h1>Публикации</h1>
        <div class="row">
            @foreach ($posts as $post)
                <div class="col-12 col-lg-4 col-md-6" style="margin-bottom: 30px">
                    <div class="card" style="height: 100%">
                        <img class="card__image" src="{{$post->image}}">
                        <div class="card__title">{{$post->title}}</div>
                        <div class="card__body">
                            {!! mb_substr($post->first_paragraph, 0, 100, 'UTF-8') . '...' !!}
                        </div>
                        <div class="flexSpacer"></div>
                        <div class="card__actions">
                            <a class="customButton customButton_text" href="#">Редактировать</a>
                            <div class="flexSpacer"></div>
                            <a class="customButton customButton_icon" href="/post/{{$post->id}}"><span class="mdi mdi-eye"></span></a>
                            <span class="customButton customButton_icon" onclick="deletePost({{$post->id}});"><span class="mdi mdi-trash-can"></span></span>

                        </div>
                    </div>
                </div>
            @endforeach

        </div>
    </div>
@endsection
