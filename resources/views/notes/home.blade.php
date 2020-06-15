@extends('/templ/master')
@include('/templ/nav')
@section('page')
    <div class="dateContainer">
      <form action="/log/show" method="GET" class="dateUI">
        @csrf
        <div class="field">
          <label class="label" for="date">The Time We Weren't Together</label>
          <div class="control">
            <select id="date" name="date" class="input form-control form-control-lg">
                @foreach ($date as $item)
                    <option>{{$item}}</option>
                @endforeach
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Click Me</button>
      </form>
    </div>
@endsection
