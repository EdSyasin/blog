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
    <h1>Публикации</h1>
    <div class="container">
        <div class="row">
            @foreach ($posts as $post)
                <div class="col-12 col-lg-4 col-md-6" style="margin-bottom: 30px">
                    <div class="card" style="height: 100%">
                        <img class="card__image" src="{{$post->image}}">
                        <div class="card__title">{{$post->title}}</div>
                        <div class="card__body">
                            {!! mb_substr($post->first_paragraph, 0, 100, 'UTF-8') . '...' !!}
                        </div>
                        <div class="card__actions"></div>
                    </div>
                </div>
            @endforeach

        </div>
    </div>
@endsection
