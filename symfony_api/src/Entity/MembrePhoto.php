<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembrePhotoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembrePhotoRepository::class)]
#[ApiResource()]
class MembrePhoto
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_vote = null;

    #[ORM\ManyToOne(inversedBy: 'membrePhoto')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Membre $photo = null;

    #[ORM\ManyToOne(inversedBy: 'membrePhoto')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Photo $membre = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateVote(): ?\DateTimeInterface
    {
        return $this->date_vote;
    }

    public function setDateVote(\DateTimeInterface $date_vote): self
    {
        $this->date_vote = $date_vote;

        return $this;
    }

    public function getPhoto(): ?Membre
    {
        return $this->photo;
    }

    public function setPhoto(?Membre $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getMembre(): ?Photo
    {
        return $this->membre;
    }

    public function setMembre(Photo $membre): self
    {
        $this->membre = $membre;

        return $this;
    }
}
