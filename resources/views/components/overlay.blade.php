@props(['id'])

<div class="overlay overlay_close" id="{{$id}}">
    <div class="overlay__background"></div>
    <div class="overlay__slot">
        {{$slot}}
    </div>
</div>
